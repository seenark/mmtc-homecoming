import { component$ } from "@builder.io/qwik";
import MmtcLogo from "~/media/mmtc-logo.gif";

export default component$(() => {
  return (
    <div class="relative flex items-center justify-center gap-0">
      <div class="flex items-center justify-center rounded-xl bg-white outline outline-1 outline-offset-4 outline-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
        </svg>
      </div>
      <div class="z-10 flex items-center rounded-full border border-gray-500 bg-white p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z"></path>
        </svg>
      </div>
      <div>
        <div class="flex border-spacing-2 items-center justify-center rounded-xl  bg-white p-1 outline outline-1 outline-offset-4 outline-slate-500">
          <img src={MmtcLogo} alt="MMTC logo" width={48} height={48} />
        </div>
      </div>
    </div>
  );
});
