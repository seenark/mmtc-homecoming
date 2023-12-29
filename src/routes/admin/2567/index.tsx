import {
  $,
  component$,
  useComputed$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { supabase } from "~/supabase/index";
type Registered = {
  classNumber: string;
  created_at: string;
  email: string;
  id: number;
  name: string;
  nickName: string | null;
  position: string | null;
  tel: string;
  workAtCompany: string | null;
};
export default component$(() => {
  const data = useSignal<Registered[]>([]);

  const sortedData = useComputed$(() => {
    const sme = data.value
      .filter((a) => isNaN(+a.classNumber))
      .sort((a, b) => a.classNumber.localeCompare(b.classNumber));
    const n = data.value
      .filter((a) => {
        return !isNaN(+a.classNumber);
      })
      .sort((a, b) => +a.classNumber - +b.classNumber);

    return [...n, ...sme];
  });

  useVisibleTask$(async () => {
    const res = await supabase
      .from("Register2567")
      .select("*")
      .order("classNumber")
      .order("name");
    if (res.error !== null) {
      console.warn(res.error);
      return;
    }
    console.log("data", res.data);
    data.value = res.data;
  });

  useVisibleTask$(() => {
    const Register2567 = supabase
      .channel("custom-update-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Register2567" },
        (payload) => {
          console.log("Change received!", payload);
          data.value = [...data.value, payload.new as Registered];
        },
      )
      .subscribe();

    return () => {
      Register2567.unsubscribe();
    };
  });

  const downloadCsv = $(() => {
    if (sortedData.value.length <= 0) return;
    const csvKeys = Object.keys(data.value[0]);
    const csv = [csvKeys, ...data.value]
      .map((row) => {
        return Object.values(row).join(",");
      })
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "2567.csv");
    document.body.appendChild(link);
    link.click();
  });

  return (
    <div class="mx-auto flex h-screen w-full max-w-[1280px] flex-col items-center gap-8 pt-16">
      <h1 class="text-2xl">2567</h1>
      <div class="flex w-full items-center justify-between">
        <h6>เรียงลำดับจากเลขรุ่นตามด้วยชื่อ</h6>
        <button class="btn btn-sm" onClick$={downloadCsv}>
          Download CSV
        </button>
      </div>
      <div class="w-full overflow-x-auto">
        <table class="table table-pin-rows">
          {/* head */}
          <thead>
            <tr>
              <th>system id</th>
              <th>รุ่น</th>
              <th>ชื่อ - นามสกุล</th>
              <th>ชื่อเล่น</th>
              <th>โทร.</th>
              <th>อีเมล์</th>
              <th>ทำงานที่</th>
              <th>ตำแหน่ง</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.value.map((item, index) => (
              <tr key={index}>
                <th>{item.id}</th>
                <td>{item.classNumber}</td>
                <td>{item.name}</td>
                <td>{item.nickName}</td>
                <td>{item.tel}</td>
                <td>{item.email}</td>
                <td>{item.workAtCompany}</td>
                <td>{item.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});
