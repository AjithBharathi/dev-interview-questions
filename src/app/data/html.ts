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
            <p>An inline frame is used to embed another (HTML) document within the current HTML document.</p>
            <p>Using &lt;iframe&gt; we can achieve it.</p>
        `
    },
    {
        que: `Define Iframe?`,
        ans: `
            <p>An IFrame (Inline Frame) is an HTML document embedded inside another HTML document on a website. The IFrame HTML element is often used to insert content from another source, such as an advertisement, youtube ets into a Web page. Although an IFrame behaves like an inline image, it can be configured with its own scrollbar independent of the surrounding page's scrollbar.
            </p>
        `
    },
    {
        que: `Mention new features in HTML5?`,
        ans: `
            <ul>
            <li>Intro of audio and video: Audio and Video tags are the two major addition to HTML5.</li>
            <li>Nav tag: The nav tag defines a set of navigation links.</li>
            <li>Progress tag</li>
            <li>Placeholder Attribute</li>
            <li>Required Attribute</li>
            <li>Email attribute</li>
            <li>Regular Expressions</li>
            <li>Storage</li>
            <li>Ease of use</li>
            </ul>
        `
    },
    {
        que: `In HTML, how to combine two or more rows or columns into a single row or column?`,
        ans: `
        <p>Attributes “rowspan” and “colspan” to make a cell span to multiple rows and columns</p>
        <p>The rowspan attribute specifies the number of rows a cell should span.</p>
        <p>syntax: &lt;td rowspan="number"&gt;</p>
        <p>The colspan attribute defines the number of columns a cell should span.</p>
        <p>syntax: &lt;td colspan="number"&gt;</p>
        `
    },
    {
        que: `What is cell padding?`,
        ans: `
            <p>Cell padding specifies the space between the cell content and its borders (cell wall).
            </p>
            <p>The cellpadding attribute is set in terms of pixels.
            </p>
            <p>&lt;table cellpadding="pixels"&gt;</p>
        `
    },
    {
        que: `What is cell spacing or border spacing?`,
        ans: `
            <p>Border spacing specifies the space between the cells.
            </p>
            <p>The cellspacing attribute is set in terms of pixels.
            </p>
            <p>&lt;table cellspacing="pixels"&gt;</p>
        `
    },
    {
        que: `How can we include audio or video in a webpage?`,
        ans: `
            <p>HTML5 provides two tags: &lt;audio&gt; and &lt;video&gt; tags using which we can add the audio or video directly in the webpage.</p>
        `
    },
    {
        que: `Are the HTML tags and elements the same thing?`,
        ans: `
            <p>No. HTML elements are defined by a starting tag, may contain some content and a closing tag.For example, &lt;h1&gt;Heading 1&lt;/h1&gt; is a HTML element but just &lt;h1&gt; is a starting tag and &lt;/h1&gt; is a closing tag.</p>
        `
    },
    {
        que: `What are tags and attributes in HTML?`,
        ans: `
            <p>Tags are the primary component of the HTML which defines how the content will be structured/ formatted, whereas Attributes are used along with the HTML tags to define the characteristics of the element. For example, &lt;p align=”center”&gt;Interview questions&lt;/p&gt;, in this the ‘align’ is the attribute using which we will align the paragraph to show in the center of the view.</p>
        `
    },
    {
        que: `What are void elements in HTML?`,
        ans: `
            <p>HTML elements which do not have closing tags or do not need to be closed are Void elements. For Example &lt;br /&gt;, &lt;img /&gt;, &lt;hr /&gt;, etc.</p>
        `
    },
    {
        que: `What is the difference between <strong>, <b> tags and <em>, <i> tags?`,
        ans: `
            <p>The effect on a normal webpage of the tags &lt;strong&gt;, &lt;b&gt;  and &lt;em&gt;, &lt;i&gt; is the same. &lt;b&gt; and &lt;i&gt; tags stands for bold and italic. These two tags only apply font styling and bold tag &lt;b&gt;, just adds more ink to the text, these tags don't say anything about the text. </p>
            <p>Whereas, &lt;strong&gt; and &lt;em&gt; tags represents that the span of text is of strong importance or more importance and emphatic stress respectively, than the rest of the text. These tags have semantic meaning.</p>
        `
    },
    {
        que: `What is the difference between <figure> tag and <img> tag?`,
        ans: `
            <p>The &lt;figure&gt; tag specifies the self-contained content, like diagrams, images, code snippets, etc. &lt;figure&gt; tag is used to semantically organize the contents of an image like image, image caption, etc., whereas the &lt;img&gt; tag is used to embed the picture in the HTML document.</p>
        `
    },
    {
        que: `How to specify the metadata in HTML?`,
        ans: `
            <p>To specify we can use &lt;meta&gt; tag which is a void tag,i.e., it does not have a closing tag. Some of the attributes used with meta tags are: name, content, http-equiv, etc. The below image tells how to specify the metadata.</p>
        `
    },
    {
        que: `What is the significance of <head> and <body> tag in HTML?`,
        ans: `
            <p>&lt;head&gt; tag provides the information about the document. It should always be enclosed in the &lt;html&gt; tag. This tag contains the metadata about the webpage and the tags which are enclosed by head tag like &lt;link&gt;, &lt;meta&gt;, &lt;style&gt;, &lt;script&gt;, etc. are not displayed on the web page. Also, there can be only 1 &lt;head&gt; tag in the entire Html document and will always be before the &lt;body&gt; tag.</p>
            <p>&lt;body&gt; tag defines the body of the HTML document. It should always be enclosed in the &lt;html&gt; tag. All the contents which needs to be displayed on the web page like images, text, audio, video, contents, using elements like &lt;p&gt;, &lt;img&gt;, &lt;audio&gt;, &lt;heading&gt;, &lt;video&gt;, &lt;div&gt;, etc. will always be enclosed by the &lt;body&gt; tag. Also, there can be only 1 body element in an HTML document and will always be after the &lt;head&gt; tag.</p>
        `
    },
    {
        que: `What is the advantage of collapsing white space?`,
        ans: `
            <p>In HTML, a blank sequence of whitespace characters is treated as a single space character, Because the browser collapses multiple spaces into a single space character and this helps a developer to indent lines of text without worrying about multiple spaces and maintain readability and understandability of HTML codes.</p>
           
        `
    },
    {
        que: `What are HTML Entities?`,
        ans: `
            <p>Some characters are reserved in HTML. If you use the less than (<) or greater than (>) signs in your text, the browser might mix them with tags. Character entities are used to display reserved characters in HTML.</p>
            <p>To use these characters in our webpage we need to use the character entities called HTML Entities</p>
            <p>syntax: &entity_name; (or) &#entity_number;</p>
            <p><strong>Advantage of using an entity name:</strong> An entity name is easy to remember.</p>
            <p><strong>Disadvantage of using an entity name:</strong> Browsers may not support all entity names, but the support for entity numbers is good.</p>
             
        `
    },
    {
        que: `What are different types of lists in HTML?`,
        ans: `
            <p>3 types of list</p>
            <p><strong>Unordered list:</strong> &lt;ul&gt;&lt;li&gt;...&lt;/li&gt;&lt;li&gt;...&lt;/li&gt;&lt;/ul&gt;</p>
            <p><strong>Example:</strong></p>
            <ul><li>list 1</li><li>list 2</li></ul>
           <p><strong>Ordered list:</strong> &lt;ol&gt;&lt;li&gt;...&lt;/li&gt;&lt;li&gt;...&lt;/li&gt;&lt;/ol&gt;</p>
           <p><strong>Example:</strong></p>
           <ol><li>list 1</li><li>list 2</li></ol>
           <p><strong>Defination/Description list:</strong> &lt;dl&gt;&lt;dt&gt;...&lt;/dt&gt;&lt;dd&gt;...&lt;/dd&gt;&lt;/dl&gt;</p>
           <p><strong>Example:</strong></p>
           <dl><dt>div element</dt><dd>this is a block level element</dd><dt>span element</dt><dd>this is a inline level element</dd></dl>

             
        `
    },
    {
        que: `Is it possible to change an inline element into a block level element?`,
        ans: `
            <p>Yes, it is possible using the “display” property with its value as “block”, to change the inline element into a block-level element.</p>
                        
        `
    },
    {
        que: `In how many ways can we position an HTML element? Or what are the permissible values of the position attribute?`,
        ans: `
            <p>There are mainly 7 values of position attribute that can be used to position an HTML element:</p>
            <p><strong>static: </strong>Default value. Here the element is positioned according to the normal flow of the document.</p>
            <p><strong>absolute: </strong>Here the element is positioned relative to its parent element. The final position is determined by the values of left, right, top, bottom.</p>
            <p><strong>fixed: </strong>This is similar to absolute except here the elements are positioned relative to the <html> element.</p>
            <p><strong>relative: </strong>Here the element is positioned according to the normal flow of the document and positioned relative to its original/ normal position.</p>
            <p><strong>initial: </strong>This resets the property to its default value.</p>
            <p><strong>inherit: </strong>Here the element inherits or takes the property of its parent.</p>
                        
        `
    },
    {
        que: `In how many ways you can display HTML elements?`,
        ans: `
            <p><strong>inline: </strong>Using this we can display any block-level element as an inline element. The height and width attribute values of the element will not affect.</p>
            <p><strong>block: </strong>Using this, we can display any inline element as a block-level element. </p>
            <p><strong>inline-block: </strong>TThis property is similar to inline, except by using the display as inline-block, we can actually format the element using height and width values.</p>
            <p><strong>flex: </strong>It displays the container and element as a flexible structure. It follows flexbox property.</p>
            <p><strong>inline-flex: </strong>It displays the flex container as an inline element while it’s content follows the flexbox properties.</p>
            <p><strong>grid: </strong>It displays the html elements as a grid container.</p>
            <p><strong>none: </strong>Using this property we can hide the HTML element.</p>
                        
        `
    },
    {
        que: `How to specify the link in HTML and explain the target attribute?`,
        ans: `
            <p>HTML provides a hyperlink - &lt;a&gt; tag to specify the links in a webpage. The ‘href’ attribute is used to specify the link and the ‘target’ attribute is used to specify, where do we want to open the linked document. The ‘target’ attribute can have the following values:</p>
            <ol>
            <li><strong>_self: </strong>This is a default value. It opens the document in the same window or tab as it was clicked.</li>
            <li><strong>_blank: </strong>It opens the document in a new window or tab.</li>
            <li><strong>_parent: </strong>It opens the document in a parent frame.</li>
            <li><strong>_top: </strong>It opens the document in a full-body window.</li>
            </ol>
                        
        `
    },
    {
        que: `What is the ‘class’ attribute in HTML?`,
        ans: `
            <p>The class attribute is used to specify the class name for an HTML element. Multiple elements in HTML can have the same class value. Also, it is mainly used to associate the styles written in the stylesheet with the HTML elements.</p>
                
        `
    },
    {
        que: `What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML elements?`,
        ans: `
            <p>Multiple elements in HTML can have the same class value, whereas a value of id attribute of one element cannot be associated with another HTML element.</p>
                
        `
    },
    {
        que: `Difference between link tag <link> and anchor tag <a>?`,
        ans: `
            <p>The anchor tag &lt;a&gt; is used to create a hyperlink to another webpage or to a certain part of the webpage and these links are clickable, whereas, link tag  &lt;link &gt; defines a link between a document and an external resource and these are not clickable.</p>
                
        `
    },
    {
        que: `What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML elements?`,
        ans: `
            <p>Multiple elements in HTML can have the same class value, whereas a value of id attribute of one element cannot be associated with another HTML element.</p>
                
        `
    },
    {
        que: `How to include javascript code in HTML?`,
        ans: `
            <p>HTML provides a &lt;script&gt; tag using which we can run the javascript code and make our HTML page more dynamic.</p>
                
        `
    },
    {
        que: `When to use scripts in the head and when to use scripts in the body?`,
        ans: `
            <p>If the scripts contain some event-triggered functions or jquery library then we should use them in the head section. If the script writes the content on the page or is not inside a function then it should be placed inside the body section at the bottom. In short, follow below three points:</p>
            <ol>
            <li>Place library scripts or event scripts in the head section.</li>
            <li>Place normal scripts that do not write anything on the page, in the head section until there is any performance issue.</li>
            <li>Place scripts that render something on the web page at the bottom of the body section.</li>
            </ol>
                
        `
    },
    {
        que: `In how many ways can we specify the CSS styles for the HTML element?`,
        ans: `
            <p>There are three ways in which we can specify the styles for HTML element:</p>
            <ol>
            <li><strong>Inline: </strong>Here we use the ‘style’ attribute inside the HTML element.</li>
            <li><strong>Internal: </strong>Here we use the &lt;style&gt; tag inside the &lt;head&gt; tag. To apply the style we bind the elements using ‘id’ or ‘class’ attributes.</li>
            <li><strong>External: </strong>Here we use the &lt;link&gt; tag inside &lt;head&gt; tag to reference the css file into our HTML code. Again the binding between elements and styles is done using ‘id’ or ‘class’ attributes.</li>
            </ol>
                
        `
    },
    {
        que: `What are forms and how to create forms in HTML?`,
        ans: `
            <p>The HTML form is used to collect the user inputs. HTML provides a &lt;form&gt; tag to create forms. To take input from the user we use the &lt;input&gt; tag inside the form so that all collected user data can be sent to the server for processing. There are different input types like ‘button’, ‘checkbox’, ‘number’, ‘text’, ‘password’, ‘submit’ etc.</p>
            
        `
    },
    {
        que: `How to handle events in HTML?`,
        ans: `
            <p>HTML allows event trigger actions in browsers using javascript or JQuery. There are a lot of events like ‘onclick’, ‘ondrag’, ‘onchange’, etc.</p>
            
        `
    },
    {
        que: `Define multipart form data?`,
        ans: `
            <p>Multipart form data is one of the values of the enctype attribute. It is used to send the file data to the server-side for processing. The other valid values of the enctype attribute are text/plain and application/x-www-form-urlencoded.</p>
            
        `
    },
    {
        que: `Is drag and drop possible using HTML5 and how?`,
        ans: `
            <p>Yes, in HTML5 we can drag and drop an element. This can be achieved using the drag and drop related events to be used with the element which we want to drag and drop.</p>
            
        `
    },
    {
        que: `What type of audio files can be played using HTML?`,
        ans: `
            <p>HTML5 supports the following three types of audio file formats:</p>
            <ol>
            <li>Mp3</li>
            <li>WAV</li>
            <li>Ogg</li>
            </ol>
            
        `
    },



];
