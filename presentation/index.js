// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  CodePane,
  Code,
  Quote,
  Slide,
  Text,
  Link,
  Table,
  TableRow,
  TableItem
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#efefef",
  secondary: "#2b3a42",
  tertiary: "#ff530d",
  quartenary: "#3f5765"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide>
          <Heading fit caps lineHeight={1} textColor="secondary">
            webpacker
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            frontend development in rails 5.1
          </Text>
        </Slide>
        <Slide>
          <Text textColor="secondary" textAlign="left">
            Paul Mölders
          </Text>
          <Text textColor="quartenary" textAlign="left">
            Frontend Developer - Freelancer
          </Text>
          <Text textAlign="left">
            <Link textColor="tertiary" href="http://p0wl.space">p0wl.space</Link>
          </Text>
        </Slide>
        <Slide>
          <Heading fit caps textColor="secondary">
            Asset Pipeline for frontend-heavy apps
          </Heading>
          <br />
          <Table>
            <TableRow>
              <TableItem textColor="tertiary">global namespace</TableItem>
              <TableItem textColor="quartenary">&</TableItem>
              <TableItem textColor="tertiary">gems for js packages</TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide>
          <Heading size={1} fit caps textColor="secondary">
            webpacker
          </Heading>
        </Slide>
        <Slide>
          <Heading fit caps textColor="secondary">
            webpack for rails
          </Heading>
          <br />
          <Heading fit caps textColor="secondary">
            yarn for dependencies
          </Heading>
          <br />
          <Heading fit caps textColor="secondary">
            react / vue / angular setup included
          </Heading>
        </Slide>
        <Slide>
          <Heading fit caps textColor="secondary">
            Install webpacker
          </Heading>
        </Slide>
        <Slide>
          <CodePane
            lang="bash"
            textColor="secondary"
            source={`
              # Gemfile
              gem 'webpacker', '~> 1.0' # or directly from github: 'rails/webpacker'

              # New project
              rails new myapp --webpack=react # react/angular/vue

              # Existing project
              rails webpacker:install
              rails webpacker:install:react # react/angular/vue
            `}
          />
        </Slide>
        <Slide>
          <Text textColor="tertiary" textAlign="left">
            webpacker binstubs
          </Text><br />
          <CodePane
            textColor="secondary"
            lang="ruby"
            source={`
              bin/webpack
              bin/webpack-watcher
              bin/webpack-dev-server
            `}
          />
        </Slide>
        <Slide>
          <Text textColor="tertiary" textAlign="left">
            webpacker related files
          </Text><br />
          <CodePane
            textColor="secondary"
            lang="ruby"
            source={`
app/javascript # this is your frontend application root folder
app/javascript/packs/application.js # this is an entry, include this in your html and kickoff your app here
app/javascript/packs/hello_react.jsx # another entry, with react usage
            `}
          />
        </Slide>
        <Slide notes="es6 imports \o/">
          <Text textColor="tertiary" textAlign="left">
            application entry point
          </Text><br />
          <CodePane
            textColor="secondary"
            lang="javascript"
            source={`
// app/javascript/packs/hello_react.jsx
import React from 'react'
import ReactDOM from 'react-dom'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: React.PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
            `}
          />
        </Slide>
        <Slide notes="helper in ruby, content hash wie bei asset pipeline">
          <Text textColor="tertiary" textAlign="left">
            delivering webpacker output
          </Text><br />
          <CodePane
            textColor="secondary"
            lang="html"
            source={`
# application.html.erb
<%= javascript_pack_tag 'hello_react' %>
<%= stylesheet_pack_tag 'hello_react' %>

# will become
<script src="/packs/hello_react-349bcb5c3feb6328691b.js"></script>
<link rel="stylesheet" media="screen" href="/packs/hello_react-dc02976b5f94b507e3b6.css">
            `}
          />
        </Slide>
        <Slide>
          <Text textColor="tertiary" textAlign="left">
            webpacker configuration files
          </Text><br />
          <CodePane
            textColor="secondary"
            lang="ruby"
            source={`
config/webpack/configuration.js
config/webpack/development.js
config/webpack/development.server.js # webpack-dev-server configuration
config/webpack/development.server.yml
config/webpack/loaders/assets.js     # yep
config/webpack/loaders/babel.js      # a
config/webpack/loaders/coffee.js     # file
config/webpack/loaders/erb.js        # for
config/webpack/loaders/react.js      # every
config/webpack/loaders/sass.js       # filetype
config/webpack/paths.yml
config/webpack/production.js         # production settings obviously
config/webpack/shared.js             # webpack config for all environments
            `}
          />
        </Slide>
        <Slide>
          <Heading fit caps textColor="secondary">
            Buzzword check
          </Heading>
        </Slide>
        <Slide>
          <Heading fit caps textColor="secondary">
            tree shaking
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="3rem">Tree shaking is a term commonly used in the JavaScript context for dead-code elimination, or more precisely, live-code import.</Quote>
            <Cite><Link textColor="tertiary" href="https://webpack.js.org/guides/tree-shaking/">webpack.js.org/guides/tree-shaking</Link></Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Text textColor="tertiary" textAlign="left">
            tree shaking with webpacker
          </Text>
          <Text textColor="secondary" fit>
            enabled by default (if you use react)
          </Text>
        </Slide>
        <Slide>
          <Heading fit caps textColor="secondary">
            hmr
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="3rem">Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running without a page reload.</Quote>
            <Cite><Link textColor="tertiary" href="https://webpack.js.org/concepts/hot-module-replacement/">webpack.js.org/concepts/hot-module-replacement</Link></Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Text textColor="tertiary" textAlign="left">
            hmr with webpacker
          </Text>
          <Text textColor="secondary" fit>
            not enabled, can be configured
          </Text>
        </Slide>
        <Slide>
          <Heading fit caps textColor="secondary">
            css modules
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote textSize="3rem">A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.</Quote>
            <Cite><Link textColor="tertiary" href="https://github.com/css-modules/css-modules">github.com/css-modules/css-modules</Link></Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Text textColor="tertiary" textAlign="left">
            css modules with webpacker
          </Text>
          <Text textColor="secondary" fit>
            not enabled, can be configured
          </Text>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary" caps>Recap</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary" notes="defaults like .erb, assets:precompile, RAILS_ENV aware">
          <Text fit textColor="secondary">easy to start with</Text><br />
          <Text fit textColor="secondary">sensible defaults</Text><br />
          <Text fit textColor="secondary">full power over configuration</Text><br />
          <Text fit textColor="secondary">production ready</Text><br />
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <Heading textColor="secondary" caps>Critique</Heading>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary" notes="pre 5.1, breaking changes may be ok">
          <Text fit textColor="secondary">complexity increased with v1.1</Text><br />
          <Text fit textColor="secondary">breaking changes, upgrade path was ugly</Text><br />
          <Text fit textColor="secondary">>10 configuration files</Text><br />
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Thanks</Quote>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
