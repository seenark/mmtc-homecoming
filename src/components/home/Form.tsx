import { $, component$, useSignal } from "@builder.io/qwik";
import FormHeader from "./FormHeader";
import V2 from "~/media/vessel-gen2.jpeg";
import { twMerge } from "tailwind-merge";

import Modal from "./Modal";
import { useNavigate } from "@builder.io/qwik-city";
import { supabase } from "~/supabase/index";

export default component$(() => {
  const modalRef = useSignal<Element>();
  const name = useSignal("");
  const nickName = useSignal("");
  const classNumber = useSignal("");
  const tel = useSignal("");
  const email = useSignal("");
  const company = useSignal("");
  const position = useSignal("");

  const nameError = useSignal(false);
  const classNumberError = useSignal(false);
  const telError = useSignal(false);
  const emailError = useSignal(false);

  const nav = useNavigate();

  const resetError = $(() => {
    nameError.value = false;
    classNumberError.value = false;
    telError.value = false;
    emailError.value = false;
  });

  const onSubmit = $(async () => {
    function isValidEmail(email: string) {
      return /\S+@\S+\.\S+/.test(email);
    }
    if (name.value == "") {
      nameError.value = true;
      return;
    }
    if (classNumber.value == "") {
      classNumberError.value = true;
      return;
    }
    if (tel.value == "" || tel.value.length !== 10) {
      telError.value = true;
      return;
    }
    if (email.value == "" || !isValidEmail(email.value)) {
      emailError.value = true;
      return;
    }
    resetError();
    const data = {
      name: name.value,
      nickName: nickName.value,
      classNumber: classNumber.value,
      tel: tel.value,
      email: email.value,
      company: company.value,
      position: position.value,
    };
    console.log(data);
    const { error, data: created } = await supabase
      .from("Register2567")
      .insert({
        classNumber: classNumber.value,
        email: email.value,
        name: name.value,
        tel: tel.value,
        nickName: nickName.value,
        position: position.value,
        workAtCompany: company.value,
      });
    console.log(created);
    if (error === null) {
      nav("/welcome");
    }
  });

  return (
    <div class="grid w-full grid-cols-2 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-xl lg:px-6">
      <div class="col-span-2 flex items-center justify-center lg:col-span-1">
        <form
          class="flex w-[500px] flex-col gap-4 p-4 pt-8"
          onSubmit$={onSubmit}
          preventdefault:submit
        >
          <FormHeader />
          <h4 class="mt-3 text-center text-lg">เชิญลงทะเบียนจ้าา</h4>
          <label for="name" class="">
            ชื่อ - นามสกุล <span class="text-red-500">*</span>
            <input
              required
              name="name"
              class={twMerge(
                "w-full rounded-lg border p-2",
                nameError.value && "border-red-500",
              )}
              placeholder="ป๋านวย ใจดี"
              bind:value={name}
            />
            {nameError.value && (
              <div class="text-sm text-red-500">กรุณาระบุชื่อ - นามสกุล</div>
            )}
          </label>
          <label for="nickName" class="">
            ชื่อเล่น
            <input
              name="nickName"
              class="w-full rounded-lg border p-2"
              placeholder="ลุงนวย"
              bind:value={nickName}
            />
          </label>
          <label for="classNumber" class="">
            รุ่น <span class="text-red-500">*</span>
            <select
              required
              name="classNumber"
              class={twMerge(
                "w-full rounded-lg border p-2",
                classNumberError.value && "border-red-500",
              )}
              bind:value={classNumber}
            >
              <option value="">-</option>
              {Array.from({ length: 43 }, (_, i) => (
                <option key={i} value={`${i + 1}`}>
                  {`#${i + 1}`}
                </option>
              ))}
              {Array.from({ length: 9 }, (_, i) => (
                <option key={`SME-${i}`} value={`SME-${i + 1}`}>
                  {`SME #${i + 1}`}
                </option>
              ))}
            </select>
            {classNumberError.value && (
              <div class="text-sm text-red-500">กรุณาระบุเลขรุ่น</div>
            )}
          </label>
          <label for="tel" class="">
            โทร. <span class="text-red-500">*</span>
            <input
              required
              name="tel"
              class={twMerge(
                "w-full rounded-lg border p-2",
                telError.value && "border-red-500",
              )}
              placeholder="0821234567"
              bind:value={tel}
            />
            {telError.value && (
              <div class="text-sm text-red-500">
                กรุณาระบุเบอร์โทรให้ถูกต้อง
              </div>
            )}
          </label>
          <label for="tel" class="">
            อีเมล์ <span class="text-red-500">*</span>
            <input
              required
              name="tel"
              class={twMerge(
                "w-full rounded-lg border p-2",
                emailError.value && "border-red-500",
              )}
              placeholder="panuay-jaidee@mmtc.ac.th"
              bind:value={email}
            />
            {emailError.value && (
              <div class="text-sm text-red-500">กรุณาระบุอีเมล์ให้ถูกต้อง</div>
            )}
          </label>
          <label for="company" class="">
            ทำงานที่
            <input
              name="company"
              class="w-full rounded-lg border p-2"
              placeholder="MMTC"
              bind:value={company}
            />
          </label>
          <label for="position" class="">
            position
            <input
              name="position"
              class="w-full rounded-lg border p-2"
              placeholder="Master"
              bind:value={position}
            />
          </label>
          <button
            type="submit"
            class="rounded-lg bg-blue-500 px-4 py-2 text-lg text-white"
          >
            มาครับ
          </button>
        </form>
      </div>
      <div class="hidden lg:block">
        <div class="flex max-w-[750px] items-center justify-center pb-4 pt-[140px]">
          <img
            src={V2}
            width={750}
            height={750}
            class="h-full  w-full  rounded-xl object-cover"
          />
        </div>
      </div>
      <Modal modalRef={modalRef} />
    </div>
  );
});
