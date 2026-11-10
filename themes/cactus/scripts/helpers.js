hexo.extend.helper.register("get_date_string", function (isoString) {
    if (!isoString) return 'A long time ago'

    const timeAgo = new Date() - new Date(isoString);
    const seconds = Math.floor(timeAgo / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) {
        return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    } else if (months > 0) {
        return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else if (days > 0) {
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutes > 0) {
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
        return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    }
})

hexo.extend.helper.register("format_duration", function (length) {
    if (!length) return '';

    const parts = String(length).split(':').map(Number);
    let h = 0, m = 0, s = 0;
    if (parts.length === 3) [h, m, s] = parts;
    else if (parts.length === 2) [m, s] = parts;
    else [s] = parts;

    const out = [];
    if (h > 0) out.push(`${h}h`);
    if (m > 0) out.push(`${m}m`);
    if (s > 0) out.push(`${s}s`);
    return out.length ? out.join(' ') : '0s';
})

hexo.extend.helper.register("getRandomNumber", function (scale) {
        return Math.floor((scale * Math.random()) * scale + 0.5)
    }
)

hexo.extend.helper.register("makeDateString", function (isoString) {
        const timeAgo = new Date() - new Date(isoString);
        const seconds = Math.floor(timeAgo / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (years > 0) return `${years}y`;
        if (months > 0) return `${months}mo`;
        if (days > 0) return `${days}d`;
        if (hours > 0) return `${hours}h`;
        if (minutes > 0) return `${minutes}m`;
        return `${seconds}s`;
    }
)