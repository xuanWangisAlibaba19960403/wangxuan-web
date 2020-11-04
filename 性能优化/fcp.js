let firstHiddenTime = document.visibilityState === 'hidden' ? 0 : Infinity;
document.addEventListener('visibilitychange', (event) => {
    console.log(event.timeStamp);
    firstHiddenTime = Math.min(firstHiddenTime, event.timeStamp);
    console.log(firstHiddenTime);
}, { once: true });

// Sends the passed data to an analytics endpoint. This code
// uses `/analytics`; you can replace it with your own URL.
function sendToAnalytics(data) {
    console.log(data);
    const body = JSON.stringify(data);
    // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
    // (navigator.sendBeacon && navigator.sendBeacon('/analytics', body)) ||
    //     fetch('/analytics', { body, method: 'POST', keepalive: true });
}

// Use a try/catch instead of feature detecting `paint`
// support, since some browsers throw when using the new `type` option.
// https://bugs.webkit.org/show_bug.cgi?id=209216
try {
    function onPaintEntry(entry, po) {
        console.log(entry, po);
        // Only report FCP if the page wasn't hidden prior to
        // the entry being dispatched. This typically happens when a
        // page is loaded in a background tab.
        if (entry.name === 'first-contentful-paint' &&
            entry.startTime < firstHiddenTime) {
            // Disconnect the observer.
            po.disconnect();

            // Report the FCP value to an analytics endpoint.
            sendToAnalytics({ fcp: entry.startTime });
        }
    }

    // Create a PerformanceObserver that calls `onPaintEntry` for each entry.
    const po = new PerformanceObserver((entryList, po) => {
        entryList.getEntries().forEach((entry) => onPaintEntry(entry, po));
    });
    // Observe entries of type `paint`, including buffered entries,
    // i.e. entries that occurred before calling `observe()` below.
    po.observe({
        type: 'paint',
        buffered: true,
    });
} catch (e) {
    console.log(e);
    // Do nothing if the browser doesn't support this API.
}