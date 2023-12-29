import { component$, type Signal } from "@builder.io/qwik";

type Props = {
  modalRef: Signal<Element | undefined>;
};
export default component$<Props>((props) => {
  return (
    <div>
      <dialog id="welcome-back" class="modal" ref={props.modalRef}>
        <div class="modal-box">
          <h3 class="text-lg font-bold">Welcome</h3>
          <p class="py-4">ยินดีต้อนรับกลับบ้าน</p>
          <div class="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button class="btn">Let's go to party</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
});
