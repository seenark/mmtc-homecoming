import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex h-[calc(100vh-100px)] w-screen items-center justify-center">
      <div>
        <h3 class="text-4xl font-bold">Welcome back</h3>
        <p class="py-4 text-2xl">ยินดีต้อนรับกลับบ้าน</p>
      </div>
    </div>
  );
});
