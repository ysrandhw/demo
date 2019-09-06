<template>
  <div id="app" class="yh-app">
    <div class="yh-app-main">
      <router-view></router-view>
    </div>
    <!-- <div class="yh-app-footer"> -->
      <router-view name="footer"></router-view>
      <BackTop
        :heightToShow="500"
        scrollContainer=".yh-app-main"
      ></BackTop>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  created () {
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: 'bl-icon';  /* project id 1275886 */
    src: url('//at.alicdn.com/t/font_1275886_pbg8y8lauqb.eot');
    src: url('//at.alicdn.com/t/font_1275886_pbg8y8lauqb.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1275886_pbg8y8lauqb.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1275886_pbg8y8lauqb.woff') format('woff'),
    url('//at.alicdn.com/t/font_1275886_pbg8y8lauqb.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1275886_pbg8y8lauqb.svg#iconfont') format('svg');
  }
  .yh-icon {
    font-family: bl-icon;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
   display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html,
  body,
  .yh-app {
    height: 100%;
    color: #222;
  }
  .yh-app {
    display: flex;
    flex-direction: column;
    &-main {
      flex: 1;
      // overflow: hidden;
      overflow: scroll;
    }
    &-footer {
      height: 52px;
      // overflow: hidden;
      overflow: scroll;
      // overflow: hidden;
      // overflow: scroll;
    }
  }
</style>
