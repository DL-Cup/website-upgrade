import { ReactComponent as WorkingOnIt } from "../components/images/working.svg";

function DesktopView() {
  return (
    <>
      <div className="empty__state__overlay">
        <WorkingOnIt />
        <p>
          Working on the desktop site at the moment. Should be ready in a few
          weeks. Mobile site works tho...in portrait mode.
        </p>
      </div>
    </>
  );
}

export default DesktopView;
