module.exports = ({ body, title, pageId }) => `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link type="text/css" rel="stylesheet" href="/${pageId}.css" />
            </head>
            <body>
                <main id="root-app">${body}</main>
                <!--<script src="/vendor.js"></script>-->
                <script src="/${pageId}.js"></script>
            </body>
        </html>
    `;
