// Import modules
import {
    getMust,
} from "../config.mjs";

import {
    useApp,
} from "../init/express.mjs";

// Export routes mapper (function)
export default () => {
    // Use application
    const app = useApp();

    // Redirect / to INDEX_REDIRECT_URL
    app.get("/", (_, res) => {
        const indexRedirectUrl = getMust("INDEX_REDIRECT_URL");
        res.redirect(indexRedirectUrl);
    });

    // The handler for robots.txt (deny all friendly robots)
    app.get("/robots.txt", (_, res) => {
        res.type("txt").send("User-agent: *\nDisallow: /");
    });
};
