webpackJsonp([0xe92f80531da8],{401:function(n,a){n.exports={data:{post:{html:'<h1 id="extensions"><a href="#extensions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extensions</h1>\n<p>API Platform Core provides a system to extend queries on items and collections.</p>\n<p>Extensions are specific to Doctrine, and therefore, the Doctrine ORM support must be enabled to use this feature. If you use custom providers it\'s up to you to implement your own extension system or not.</p>\n<h2 id="custom-extension"><a href="#custom-extension" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Custom Extension</h2>\n<p>Custom extensions must implement the <code>ApiPlatform\\Core\\Bridge\\Doctrine\\Orm\\Extension\\QueryCollectionExtensionInterface</code> and / or the <code>ApiPlatform\\Core\\Bridge\\Doctrine\\Orm\\Extension\\QueryItemExtensionInterface</code> interfaces, to be run when querying for a collection of items and when querying for an item respectively.</p>\n<p>If you use <a href="/docs/core/data-providers">custom data providers</a>, they must support extensions and be aware of active extensions to work properly.</p>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>In the following example, we will see how to always get the offers owned by the current user. We will set up an exception, whenever the user has the <code>ROLE_ADMIN</code>.</p>\n<p>Given these two entities:</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/User.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">User</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Entity/Offer.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Entity</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Annotation<span class="token punctuation">\\</span>ApiResource</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @ApiResource\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">Offer</span>\n<span class="token punctuation">{</span>\n   <span class="token comment">/**\n     * @var User\n     * @ORM\\ManyToOne(targetEntity="User")\n     */</span>\n    <span class="token keyword">private</span> <span class="token variable">$user</span><span class="token punctuation">;</span>\n\n    <span class="token comment">//...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token comment">// api/src/Doctrine/CurrentUserExtension.php</span>\n\n<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Doctrine</span><span class="token punctuation">;</span>\n\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Bridge<span class="token punctuation">\\</span>Doctrine<span class="token punctuation">\\</span>Orm<span class="token punctuation">\\</span>Extension<span class="token punctuation">\\</span>QueryCollectionExtensionInterface</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Bridge<span class="token punctuation">\\</span>Doctrine<span class="token punctuation">\\</span>Orm<span class="token punctuation">\\</span>Extension<span class="token punctuation">\\</span>QueryItemExtensionInterface</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">ApiPlatform<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Bridge<span class="token punctuation">\\</span>Doctrine<span class="token punctuation">\\</span>Orm<span class="token punctuation">\\</span>Util<span class="token punctuation">\\</span>QueryNameGeneratorInterface</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Entity<span class="token punctuation">\\</span>Offer</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Entity<span class="token punctuation">\\</span>User</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Doctrine<span class="token punctuation">\\</span>ORM<span class="token punctuation">\\</span>QueryBuilder</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Security<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Authentication<span class="token punctuation">\\</span>Token<span class="token punctuation">\\</span>Storage<span class="token punctuation">\\</span>TokenStorageInterface</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token package">Symfony<span class="token punctuation">\\</span>Component<span class="token punctuation">\\</span>Security<span class="token punctuation">\\</span>Core<span class="token punctuation">\\</span>Authorization<span class="token punctuation">\\</span>AuthorizationCheckerInterface</span><span class="token punctuation">;</span>\n\n<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">CurrentUserExtension</span> <span class="token keyword">implements</span> <span class="token class-name">QueryCollectionExtensionInterface</span><span class="token punctuation">,</span> QueryItemExtensionInterface\n<span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token variable">$tokenStorage</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token variable">$authorizationChecker</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span>TokenStorageInterface <span class="token variable">$tokenStorage</span><span class="token punctuation">,</span> AuthorizationCheckerInterface <span class="token variable">$checker</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">tokenStorage</span> <span class="token operator">=</span> <span class="token variable">$tokenStorage</span><span class="token punctuation">;</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">authorizationChecker</span> <span class="token operator">=</span> <span class="token variable">$checker</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">/**\n     * {@inheritdoc}\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">applyToCollection</span><span class="token punctuation">(</span>QueryBuilder <span class="token variable">$queryBuilder</span><span class="token punctuation">,</span> QueryNameGeneratorInterface <span class="token variable">$queryNameGenerator</span><span class="token punctuation">,</span> string <span class="token variable">$resourceClass</span><span class="token punctuation">,</span> string <span class="token variable">$operationName</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">addWhere</span><span class="token punctuation">(</span><span class="token variable">$queryBuilder</span><span class="token punctuation">,</span> <span class="token variable">$resourceClass</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">/**\n     * {@inheritdoc}\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">applyToItem</span><span class="token punctuation">(</span>QueryBuilder <span class="token variable">$queryBuilder</span><span class="token punctuation">,</span> QueryNameGeneratorInterface <span class="token variable">$queryNameGenerator</span><span class="token punctuation">,</span> string <span class="token variable">$resourceClass</span><span class="token punctuation">,</span> <span class="token keyword">array</span> <span class="token variable">$identifiers</span><span class="token punctuation">,</span> string <span class="token variable">$operationName</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">array</span> <span class="token variable">$context</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">addWhere</span><span class="token punctuation">(</span><span class="token variable">$queryBuilder</span><span class="token punctuation">,</span> <span class="token variable">$resourceClass</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">/**\n     *\n     * @param QueryBuilder $queryBuilder\n     * @param string       $resourceClass\n     */</span>\n    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function">addWhere</span><span class="token punctuation">(</span>QueryBuilder <span class="token variable">$queryBuilder</span><span class="token punctuation">,</span> string <span class="token variable">$resourceClass</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token variable">$user</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">tokenStorage</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$user</span> <span class="token keyword">instanceof</span> <span class="token class-name">User</span> <span class="token operator">&amp;&amp;</span> Offer<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token keyword">class</span> <span class="token operator">===</span> <span class="token variable">$resourceClass</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">authorizationChecker</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">isGranted</span><span class="token punctuation">(</span><span class="token string">\'ROLE_ADMIN\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token variable">$rootAlias</span> <span class="token operator">=</span> <span class="token variable">$queryBuilder</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getRootAliases</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token variable">$queryBuilder</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">andWhere</span><span class="token punctuation">(</span><span class="token function">sprintf</span><span class="token punctuation">(</span><span class="token string">\'%s.user = :current_user\'</span><span class="token punctuation">,</span> <span class="token variable">$rootAlias</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token variable">$queryBuilder</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">setParameter</span><span class="token punctuation">(</span><span class="token string">\'current_user\'</span><span class="token punctuation">,</span> <span class="token variable">$user</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Finally register the custom extension:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># api/config/services.yaml</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n\n    <span class="token comment"># ...</span>\n\n    <span class="token key atrule">\'App\\Doctrine\\CurrentUserExtension\'</span><span class="token punctuation">:</span>\n        <span class="token key atrule">tags</span><span class="token punctuation">:</span>\n            <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> api_platform.doctrine.orm.query_extension.collection<span class="token punctuation">,</span> <span class="token key atrule">priority</span><span class="token punctuation">:</span> <span class="token number">9 </span><span class="token punctuation">}</span>\n            <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> api_platform.doctrine.orm.query_extension.item <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Thanks to the <code>api_platform.doctrine.orm.query_extension.collection</code> tag, API Platform will register this service as a collection extension. The <code>api_platform.doctrine.orm.query_extension.item</code> do the same thing for items.</p>\n<p>Notice the priority level for the <code>api_platform.doctrine.orm.query_extension.collection</code> tag. When an extension implements the <code>ApiPlatform\\Core\\Bridge\\Doctrine\\Orm\\Extension\\QueryResultCollectionExtensionInterface</code> or the <code>ApiPlatform\\Core\\Bridge\\Doctrine\\Orm\\Extension\\QueryResultItemExtensionInterface</code> interface to return results by itself, any lower priority extension will not be executed. Because the pagination is enabled by default with a priority of 8, the priority of the <code>app.doctrine.orm.query_extension.current_user</code> service must be at least 9 to ensure its execution.</p>\n<h3 id="blocking-anonymous-users"><a href="#blocking-anonymous-users" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Blocking Anonymous Users</h3>\n<p>This example adds a <code>WHERE</code> clause condition only when a fully authenticated user without <code>ROLE_ADMIN</code> tries to access to a resource. It means that anonymous users will be able to access to all data. To prevent this potential security issue, the API must ensure that the current user is authenticated.</p>\n<p>To secure the access to endpoints, use the following access control rule:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token comment"># app/config/package/security.yaml</span>\n<span class="token key atrule">security</span><span class="token punctuation">:</span>\n    <span class="token comment"># ...</span>\n    <span class="token key atrule">access_control</span><span class="token punctuation">:</span>\n        <span class="token comment"># ...</span>\n        <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> ^/offers<span class="token punctuation">,</span> <span class="token key atrule">roles</span><span class="token punctuation">:</span> IS_AUTHENTICATED_FULLY <span class="token punctuation">}</span>\n        <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> ^/users<span class="token punctuation">,</span> <span class="token key atrule">roles</span><span class="token punctuation">:</span> IS_AUTHENTICATED_FULLY <span class="token punctuation">}</span>\n</code></pre>\n      </div>'},navDoc:{edges:[{node:{title:"The Distribution",path:"distribution",items:[{id:"index",title:"Creating a Fully Featured API in 5 Minutes",anchors:null},{id:"testing",title:"Testing and Specifying the API",anchors:null}]}},{node:{title:"The API Component",path:"core",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:[{id:"installing-api-platform-core",title:"Installing API Platform Core"},{id:"before-reading-this-documentation",title:"Before Reading this Documentation"},{id:"mapping-the-entities",title:"Mapping the Entities"}]},{id:"configuration",title:"Configuration",anchors:null},{id:"operations",title:"Operations",anchors:[{id:"enabling-and-disabling-operations",title:"Enabling and Disabling Operations"},{id:"configuring-operations",title:"Configuring Operations"},{id:"subresources",title:"Subresources"},{id:"creating-custom-operations-and-controllers",title:"Creating Custom Operations and Controllers"}]},{id:"default-order",title:"Overriding Default Order",anchors:null},{id:"filters",title:"Filters",anchors:[{id:"doctrine-orm-filters",title:"Doctrine ORM Filters"},{id:"serializer-filters",title:"Serializer Filters"},{id:"creating-custom-filters",title:"Creating Custom Filters"},{id:"apifilter-annotation",title:"ApiFilter Annotation"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"the-serialization-context-groups-and-relations",title:"The Serialization Context, Groups and Relations"},{id:"using-serialization-groups",title:"Using Serialization Groups"},{id:"using-different-serialization-groups-per-operation",title:"Using Different Serialization Groups per Operation"},{id:"changing-the-serialization-context-dynamically",title:"Changing the Serialization Context Dynamically"},{id:"changing-the-serialization-context-on-a-per-item-basis",title:"Changing the Serialization Context on a Per Item Basis"},{id:"name-conversion",title:"Name Conversion"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"},{id:"entity-identifier-case",title:"Entity Identifier Case"},{id:"embedding-the-json-ld-context",title:"Embedding the JSON-LD Context"}]},{id:"validation",title:"Validation",anchors:[{id:"using-validation-groups",title:"Using Validation Groups"},{id:"dynamic-validation-groups",title:"Dynamic Validation Groups"},{id:"error-levels-and-payload-serialization",title:"Error Levels and Payload Serialization"}]},{id:"errors",title:"Error Handling",anchors:[{id:"converting-php-exceptions-to-http-errors",title:"Converting PHP Exceptions to HTTP Errors"}]},{id:"pagination",title:"Pagination",anchors:[{id:"disabling-the-pagination",title:"Disabling the Pagination"},{id:"changing-the-number-of-items-per-page",title:"Changing the Number of Items per Page"},{id:"partial-pagination",title:"Partial Pagination"}]},{id:"events",title:"The Event System",anchors:null},{id:"content-negotiation",title:"Content Negotiation",anchors:[{id:"enabling-several-formats",title:"Enabling Several Formats"},{id:"registering-a-custom-serializer",title:"Registering a Custom Serializer"},{id:"creating-a-responder",title:"Creating a Responder"},{id:"writing-a-custom-normalizer",title:"Writing a Custom Normalizer"}]},{id:"external-vocabularies",title:"Using External JSON-LD Vocabularies",anchors:null},{id:"extending-jsonld-context",title:"Extending JSON-LD context",anchors:null},{id:"data-providers",title:"Data Providers",anchors:[{id:"custom-collection-data-provider",title:"Custom Collection Data Provider"},{id:"custom-item-data-provider",title:"Custom Item Data Provider"},{id:"injecting-the-serializer-in-an-itemdataprovider",title:'Injecting the Serializer in an "ItemDataProvider"'}]},{id:"extensions",title:"Extensions",anchors:[{id:"custom-extension",title:"Custom Extension"},{id:"example",title:"Filter upon the current user"}]},{id:"security",title:"Security",anchors:null},{id:"performance",title:"Performance",anchors:[{id:"enabling-the-builtin-http-cache-invalidation-system",title:"Enabling the Built-in HTTP Cache Invalidation System"},{id:"enabling-the-metadata-cache",title:"Enabling the Metadata Cache"},{id:"using-ppm-php-pm",title:"Using PPM (PHP-PM)"},{id:"doctrine-queries-and-indexes",title:"Doctrine Queries and Indexes"}]},{id:"operation-path-naming",title:"Operation Path Naming",anchors:[{id:"configuration",title:"Configuration"},{id:"create-a-custom-operation-path-resolver",title:"Create a Custom Operation Path Naming"}]},{id:"form-data",title:"Accept application/x-www-form-urlencoded Form Data",anchors:null},{id:"fosuser-bundle",title:"FOSUserBundle Integration",anchors:[{id:"installing-the-bundle",title:"Installing the Bundle"},{id:"enabling-the-bridge",title:"Enabling the Bridge"},{id:"creating-a-user-entity-with-serialization-groups",title:'Creating a "User" Entity with Serialization Groups'}]},{id:"jwt",title:"Adding a JWT authentication using LexikJWTAuthenticationBundle",anchors:[{id:"testing-with-swagger",title:"Testing with Swagger"},{id:"testing-with-behat",title:"Testing with Behat"}]},{id:"nelmio-api-doc",title:"NelmioApiDocBundle integration",anchors:null},{id:"angularjs-integration",title:"AngularJS Integration",anchors:[{id:"restangular",title:"Restangular"},{id:"ng-admin",title:"ng-admin"}]},{id:"swagger",title:"Swagger Support",anchors:[{id:"override-swagger-documentation",title:"Override Swagger documentation"}]},{id:"graphql",title:"GraphQL Support",anchors:[{id:"overall-view",title:"Overall View"},{id:"enabling-graphql",title:"Enabling GraphQL"},{id:"graphiql",title:"GraphiQL"}]},{id:"serialization",title:"The Serialization Process",anchors:[{id:"overall-process",title:"Overall Process"},{id:"available-serializers",title:"Available Serializers"},{id:"decorating-a-serializer-and-add-extra-data",title:"Decorating a Serializer and Add Extra Data"}]},{id:"dto",title:"Handling Data Transfer Objects (DTOs)",anchors:null}]}},{node:{title:"The Schema Generator Component",path:"schema-generator",items:[{id:"index",title:"Introduction",anchors:null},{id:"getting-started",title:"Getting Started",anchors:null},{id:"configuration",title:"Configuration",anchors:null}]}},{node:{title:"The Admin Component",path:"admin",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"getting-started",title:"Getting Started",anchors:[{id:"installation",title:"Installation"},{id:"creating-the-admin",title:"Creating the Admin"},{id:"customizing-the-admin",title:"Customizing the Admin"}]},{id:"authentication-support",title:"Authentication Support",anchors:null},{id:"handling-relations-to-collections",title:"Handling Relations to Collections",anchors:[{id:"using-an-autocomplete-input-for-relations",title:"Using an Autocomplete Input for Relations"}]}]}},{node:{title:"The Client Generator Component",path:"client-generator",items:[{id:"index",title:"Introduction",anchors:[{id:"features",title:"Features"}]},{id:"react",title:"React generator",anchors:null},{id:"vuejs",title:"Vue.js generator",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null}]}},{node:{title:"Deployment",path:"deployment",items:[{id:"index",title:"Introduction",anchors:null},{id:"kubernetes",title:"Deploying to a Kubernetes Cluster",anchors:null},{id:"heroku",title:"Deploying an API Platform App on Heroku",anchors:null}]}},{node:{title:"Extra",path:"extra",items:[{id:"releases",title:"The Release Process",anchors:null},{id:"philosophy",title:"The Project's Philosophy",anchors:null},{id:"troubleshooting",title:"Troubleshooting",anchors:null},{id:"contribution-guides",title:"Contribution Guides",anchors:null},{id:"conduct",title:"Contributor Code Of Conduct",anchors:null}]}}]}},pathContext:{path:"docs/core/extensions",current:{path:"docs/core/extensions",title:"The API Component - Extensions"},prev:{path:"docs/core/data-providers",title:"Data Providers",rootPath:"The API Component"},next:{path:"docs/core/security",title:"Security",rootPath:"The API Component"}}}}});
//# sourceMappingURL=path---docs-core-extensions-040f5becdcaea8b0c48e.js.map