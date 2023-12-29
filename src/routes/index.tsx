import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Form from "~/components/home/Form";

export default component$(() => {
  return (
    <>
      <div class="flex min-h-[calc(100vh-100px)] w-screen justify-center ">
        <div class="flex h-full flex-col items-center gap-4 px-4 pt-16 lg:px-16">
          <h2 class="text-center text-2xl lg:text-4xl ">
            ยินดีต้อนรับเข้าสู่งานคืนสู่เหย้า <br></br> @MMTC
          </h2>
          <Form />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "MMTC Homecomming",
  meta: [
    {
      name: "description",
      content: "Welcome back to the MMTC.",
    },
  ],
};
