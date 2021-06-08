export const Html = [
    {
        que: 'what is HTML?',
        ans: `
            <P>HTML stands for Hyper Text Markup language. It is a standard text formatting language used for developing web pages released in 1993.</p>
            <p>HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on.</p>
            <p>HYPERTEXT means machine readable text. MARKUP to structure it in a specific way (or) format.</p>
        `
    },
    {
        que: 'Difference between HTML and HTML5?',
        column: ['HTML', 'HTML5'],
        ansTable: [
            {
                HTML: `A hypertext markup language (HTML) is the primary language for developing web pages.`,
                HTML5: `HTML5 is a new version of HTML with new functionalities with markup language with Internet technologies.`
            },
            {
                HTML: `Language in HTML does not have support for video and audio.`,
                HTML5: `HTML5 supports both video and audio.`
            },
            {
                HTML: `Older version of HTML are less mobile-friendly.`,
                HTML5: `HTML5 language is more mobile-friendly.`
            },
            {
                HTML: `Doctype declaration is too long and complicated.
                <! DOCTYPE HTML PUBLIC "- // W3C // DTD HTML 4.01 // EN" "http://www.w3.org/TR/html4/strict.dtd">`,
                HTML5: `Doctype declaration is quite simple and easy <! DOCTYPE html>. `
            },
            {
                HTML: `HTML4 uses DTD method because 4.01 was based on SGML. 
                (SGML - Standard Generalized Markup Language), (DTD - Document Type Defination is a set of markup declarations that define a document type for a SGML family)`,
                HTML5: `HTML5 is extension of HTMl4`
            },
            {
                HTML: `Character encoding in HTML is too long.
                <! DOCTYPE HTML PUBLIC "- // W3C // DTD HTML 4.0 Transitional // EN">`,
                HTML5: `Character encoding declaration is simple <meta charset = "UTF-8">`
            },
            {
                HTML: `It is almost impossible to get true GeoLocation of user with the help of browser.`,
                HTML5: `One can track the GeoLocation of a user easily by using JS GeoLocation API.`
            },
            {
                HTML: `In HTML, multi-media, vector graphics are not supported. Those items are only possible with tools LikeSilver light, Adobe Flash, VML, etc.`,
                HTML5: `In HTML5, multi-media supported. vector graphics is an integral part of HTML5, SVG and canvas.`
            },
            {
                HTML: `Language in HTML does not have support for video and audio.`,
                HTML5: `HTML5 supports both video and audio.`
            },
            {
                HTML: `Audio and video are not the part of HTML4.`,
                HTML5: `Audio and video are essential parts of HTML5,like: <Audio>, <Video>.`
            },
            {
                HTML: `It is not possible to create shapes like circles, rectangles, triangles.`,
                HTML5: `We can draw shapes like circles, rectangles, triangles.`
            },
            {
                HTML: `The HTML browser uses cache memory as temporary storage.`,
                HTML5: `HTML5 has the storage options like:application cache, SQL database, and web storage.`
            },
            {
                HTML: `Uses cookies to store data.`,
                HTML5: `Uses local storage instead of cookies.`
            },
            {
                HTML: `In HTML, the browser interface and JavaScript running in the same thread.`,
                HTML5: `The HTML5 has the JavaScript Web Worker API, which allows the browser interface to run in multiple threads.`
            },
            {
                HTML: `-`,
                HTML5: `It has better defined semantic roles for existing elements (strong, em, b, i) and adding new elements with useful semantics (article, section, header, aside, nav) should replace majority of DIV used on web page. make our page a bit more semantic and easy to read.`
            },
            {
                HTML: `Client and server communication done through streaming and long polling. no web sockets in HTML4.`,
                HTML5: `It contain web sockets that allow full dplex communication between clients and servers.`
            },
            {
                HTML: `In HTML4 some tags are removed like <applet>, <acronym>`,
                HTML5: `Those removed tags are replace with <object>, <abbr>`
            },
            {
                HTML: `No semantic elements or if it contains, only less`,
                HTML5: `Having more semantic elements`
            },
            {
                HTML: `Used more than 10 years.`,
                HTML5: `Still under in construction.`
            },
        ]
    },
    {
        que: 'what is client side storage?',
        ans: `
            <p>Client side storage means local storage.</p>
        `
    },
    {
        que: 'Mention some media elements?',
        ans: `
            <p>audio, video, track, source, embed ets..</p>
        `
    },
    {
        que: 'How many times can we use main tag in the same page?',
        ans: `
            <p>&lt;main&gt; tag can use only once in a page and cannot use second time in the same page.</p>
        `
    },
    {
        que: 'Mention some New HTML APIs',
        ans: `
            <p>Canvas, Drag&Drop, WebStorage, Geo Location, File, media</p>
        `
    },
    {
        que: 'What are Semantic Elements?',
        ans: `
            <p>A semantic element clearly describes its meaning to both the browser and the developer. Clearly defines its content.</p>
            <p>No need to use more id and class.</p>
            <p>they have specific attributes for their structure.</p>
            <p>Examples of semantic elements: &lt;form&gt;, &lt;table&gt;, &lt;article&gt;, &lt;footer&gt;, &lt;header&gt;, &lt;main&gt;, &lt;mark&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;aside&gt;, &lt;details&gt;, &lt;figcaption&gt;, &lt;figure&gt;, &lt;summary&gt;, &lt;time&gt;</p>
        `
    },
    {
        que: 'What are Non Semantic Elements?',
        ans: `
        <p>Tells nothing about its content.</p>
        <p>Contains lots of class and id.</p>
        <p>‘class’ attribute can be used to work with their structure.</p>
        <p>Examples of non-semantic elements: &lt;div&gt; and &lt;span&gt;</p>
        `
    },
    {
        que: 'Difference between semantic and non semantic elements ?',
        img: `../../assets/semantic_elements.png`
    },
    {
        que: 'What is Nested Elements?',
        ans: `
        <p>You can put elements inside other elements too — this is called nesting.</p>
        <p>&lt;p&gt;My cat is &lt;strong&gt;very&lt;/strong&gt; grumpy.&lt;/p&gt;</p>
        `
    },
    {
        que: 'What is Empty elements?',
        ans: `
        <p>ome elements have no content and are called empty elements.</p>
        <p>&lt;img src="images/firefox-icon.png" alt="My test image"&gt;</p>
        `
    },
    {
        que: 'Ways to display elements?',
        ans: `
        <p>There are two display values: block and inline elements</p>
        `
    },
    {
        que: 'What is Block-level Elements?',
        ans: `
        <ul>
        <li>A block-level element always starts on a new line.</li>
        <li>A block-level element always takes up the full width available (stretches out to the left and right as far as it can).</li>
        <li>A block level element has a top and a bottom margin, whereas an inline element does not.</li>
        <li>Here are the block-level elements in HTML: &lt;address&gt; &lt;article&gt; &lt;aside&gt; &lt;blockquote&gt; &lt;canvas&gt; &lt;dd&gt; &lt;div&gt; &lt;dl&gt; &lt;dt&gt; &lt;fieldset&gt; &lt;figcaption&gt; &lt;figure&gt; &lt;footer&gt; &lt;form&gt; &lt;h1&gt;-&lt;h6&gt; &lt;header&gt; &lt;hr&gt; &lt;li&gt; &lt;main&gt; &lt;nav&gt; &lt;noscript&gt; &lt;ol&gt; &lt;p&gt; &lt;pre&gt; &lt;section&gt; &lt;table&gt; &lt;tfoot&gt; &lt;ul&gt; &lt;video&gt;</li>
        </ul>
        `
    },
    {
        que: 'What is Inline Elements?',
        ans: `
        <ul>
        <li>An inline element does not start on a new line.</li>
        <li>An inline element only takes up as much width as necessary.</li>
        <li>Can;t able to stretche an inline element. but we can make is as stretche once we convert it into block-level element</li>
        <li>Here are the inline elements in HTML: &lt;a&gt; &lt;abbr&gt; &lt;acronym&gt; &lt;b&gt; &lt;bdo&gt; &lt;big&gt; &lt;br&gt; &lt;button&gt; &lt;cite&gt; &lt;code&gt; &lt;dfn&gt; &lt;em&gt; &lt;i&gt; &lt;img&gt; &lt;input&gt; &lt;kbd&gt; &lt;label&gt; &lt;map&gt;  &lt;object&gt; &lt;output&gt; &lt;q&gt; &lt;samp&gt; &lt;script&gt; &lt;select&gt; &lt;small&gt; &lt;span&gt; &lt;strong&gt; &lt;sub&gt; &lt;sup&gt; &lt;textarea&gt; &lt;time&gt; &lt;tt&gt; &lt;var&gt;</li>
        </ul>
        `
    },
    {
        que: `Can we use DIV (block-level element) element inside span (inline) tags?`,
        ans: `
        <p>No, An inline element cannot contain a block-level element.</p>
        `
    },
    {
        que: `What is meta tag?`,
        ans: `
        <p>The meta tag defines metadata about an HTML document. Metadata is data (information) about data.</p>
        <p>meta tags always go inside the <head> element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.</p>
        <p>Metadata will not be displayed on the page, but is machine parsable.</p>
        <p>Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.</p>
        <p>There is a method to let web designers take control over the viewport (the user's visible area of a web page), through the meta tag (See "Setting The Viewport" example below).</p>
        <h5>Examples</h5>
        <ul>
        <li>Define unicode: &lt;meta charset="UTF-8"&gt;</li>
        <li>Define a description of your web page: &lt;meta name="description" content="Free Web tutorials"&gt;</li>
        <li>Define keywords for search engines: &lt;meta name="keywords" content="HTML, CSS, JavaScript"&gt;</li>
        <li>Define the author of a page: &lt;meta name="author" content="John Doe"&gt;</li>
        <li>Setting the viewport to make your website look good on all devices: &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</li>
        <li>Refresh document every 30 seconds: &lt;meta http-equiv="refresh" content="30"&gt;</li>
        </ul>
        `
    },
    {
        que: `How to do Setting the Viewport?`,
        ans: `
        <p>The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.</p>
        <p>You should include the following <meta> element in all your web pages: &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</p>
        <p>This gives the browser instructions on how to control the page's dimensions and scaling.</p>
        <p>The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).</p>
        <p>The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.</p>
        `
    },
    {
        que: 'Difference between SVG and CANVAS?',
        column: ['SVG', 'CANVAS'],
        ansTable: [
            {
                SVG: `The HTML <svg> element is a container for SVG graphics. SVG stands for Scalable Vector Graphics. SVG and useful for defining graphics such as boxes, circles, text, etc. SVG stands for Scalable Vector Graphics and is a language for describing 2D-graphics and graphical applications in XML and the XML is then rendered by an SVG viewer. Most of the web browsers can display SVG just like they can display PNG, GIF, and JPG.`,
                CANVAS: `The HTML <canvas> element is used to draw graphics, via JavaScript. The<canvas> element is a container for graphics.`
            },
            {
                SVG: `SVG has better scalability. So it can be printed with high quality at any resolution.`,
                CANVAS: `Canvas has poor scalability. Hence it is not suitable for printing on higher resolution.`
            },
            {
                SVG: `SVG gives better performance with smaller number of objects or larger surface.`,
                CANVAS: `Canvas gives better performance with smaller surface or larger number of objects.`
            },
            {
                SVG: `SVG can be modified through script and CSS.`,
                CANVAS: `Canvas can be modified through script only.`
            },
            {
                SVG: `SVG is vector based and composed of shapes.`,
                CANVAS: `Canvas is raster based and composed of pixel.`
            },
        ]
    },
    {
        que: `How to display a web page inside a web page or nesting of webpages?`,
        ans: `
            <p>The &lt;iframe&gt; tag specifies an inline frame.</p>
            <p>An inline frame is used to embed another document within the current HTML document.</p>
        `
    },
    {
        que: `Define Iframe?`,
        ans: `
            <p>Using &lt;iframe&gt; we can achieve it.</p>
        `
    },



];
