export class Cookies {

    constructor() {
        this.checkCookieEnabled();
    }

    checkCookieEnabled() {
        // console.log(navigator.cookieEnabled)
        if (!navigator.cookieEnabled) {
            alert('Masz wyłączoną obsługę ciasteczek');
            return;
        }
    }

    setCookie(options) {

        // console.log(options);

        const option = {
            name: options.name || 'test',
            value: options.value || 'wartosc testowa',
            days: options.days,
            domain: options.domain,
            path: options.path,
            secure: options.secure
        }

        // console.log(option);

        const cookieName = encodeURIComponent(option.name);
        const cookieVal = encodeURIComponent(option.value);

        const cookieSettingsTab = [];

        cookieSettingsTab.push(`${cookieName} = ${cookieVal}`);

        if (typeof option.days === 'number') {

            const date = new Date();

            date.setTime(date.getTime() + (option.days * 24 * 60 * 60 * 1000));

            cookieSettingsTab.push(`expires = ${date.toGMTString()}`);
        }

        if (option.domain) {
            cookieSettingsTab.push(`domain = ${option.domain}`);
        }

        if (option.path) {
            cookieSettingsTab.push(`path = ${option.path}`);
        }

        if (option.secure && typeof option.secure === 'boolean') {
            cookieSettingsTab.push(`secure = ${option.secure}`);
        }

        document.cookie = cookieSettingsTab.join(';');




        console.log(cookieSettingsTab);

    }

    getCookie(name) {
        if (document.cookie != '') {
            const cookies = document.cookie.split(/; */);
            for (let i = 0; i < cookies.length; i++); {
                const cookieName = cookies[i].split('=')[0];
                const cookieVal = cookies[i].split('=')[1];

                if (decodeURIComponent(cookieName) === name) {
                    return cookieVal;
                }


            }


        }
    }

    removeCookie(name) {
        this.setCookie({
            name: name,
            days: -1

        });
    }

}