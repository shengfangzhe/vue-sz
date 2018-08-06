<template>
  <div>
    <tbHeading :level="1">
      <a href="#">hello world</a>
    </tbHeading>
    <renderWay :level="2">
      <a href="#">hahahhahah</a>
    </renderWay>
    <com-heading :level="1">这操蛋的世界</com-heading>
  </div>
</template>

<script>
import tbHeading from "./tb-heading.vue";
import Vue from "vue";
var getChildrenTextContent = children => {
  return children
    .map(function(node) {
      return node.children ? getChildrenTextContent(node.children) : node.text;
    })
    .join("");
};

Vue.component("renderWay", {
  render(createElement) {
    return createElement("h" + this.level, this.$slots.default);
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});

Vue.component("com-heading", {
  render: function(createElement) {
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, "-")
      .replace(/(^\-|\-$)/g, "");

    return createElement("h" + this.level, [
      createElement(
        "a",
        {
          attrs: {
            name: headingId,
            href: "#" + headingId,
            title:"this is a"
          },
          style: {
            color: "red",
            fontSize: "20px"
          },
          class: {
            foo: true,
            bar: false
          },
          domProps: {
            innerHTML: "baz"
          },
          props: {
            myProp: "bar"
          },
          on: {
            click(event) {
              event.preventDefault();
              console.log(111111111111111111111);
            }
          }
        },
        this.$slots.default
      )
    ]);
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});

export default {
  name: "parent",
  components: {
    tbHeading
  }
};
</script>