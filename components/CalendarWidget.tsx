import React, { useEffect } from 'react';

const CalendarWidget: React.FC = () => {
  useEffect(() => {
    const handleEventMessage = (e: MessageEvent) => {
      switch (e.data.action) {
        case "setHeight": {
          const embedCodeId = e.data.embedCodeId;
          if (embedCodeId != null && embedCodeId !== '') {
            const elements = document.getElementsByClassName('form-iframe-' + embedCodeId);
            for (let i = 0; i < elements.length; i++) {
              (elements[i] as HTMLElement).style.height = `${e.data.height}px`;
            }
          } else {
            const iframe = document.getElementById('form-iframe') as HTMLIFrameElement;
            if (iframe) {
              iframe.style.height = `${e.data.height}px`;
            }
          }
          break;
        }
        case "eventClick": {
          const eventId = e.data.params.eventId;
          const reservationId = e.data.params.reservationId;
          onEventClick(eventId, reservationId);
          break;
        }
      }
    };

    window.addEventListener("message", handleEventMessage, false);

    return () => {
      window.removeEventListener("message", handleEventMessage, false);
    };
  }, []);

  function onEventClick(eventId: string, occId: string) {
    console.log("Event clicked: ", eventId, occId);
  }

  return (
    <iframe
      id="form-iframe"
      className="form-iframe-25805 w-full border-none overflow-hidden"
      src="https://widgets.courtreserve.com/Online/Public/EmbedCode/9834/25805"
      scrolling="no"
    ></iframe>
  );
};

export default CalendarWidget;
