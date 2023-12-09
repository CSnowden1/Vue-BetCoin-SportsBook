



export function convertDateToUserTimezone(isoString) {
    // Parse the ISO string to a Date object
    const date = new Date(isoString);

    // Options for formatting the date
    const options = {
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };

    // Format the date in the user's local timezone
    return new Intl.DateTimeFormat('en-US', options).format(date);
}


