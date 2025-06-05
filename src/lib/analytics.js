// @ts-ignore
export function sendEvent({ action, category, label, value }) {
    if (typeof window !== 'undefined' && typeof gtag === 'function') {
        gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
    }
}
