Vue.component("todo-item", {
    data: function () {
        return {
            isEdit: false,
            sourceValue: this.item.text.trim(),
            newValue: this.item.text.trim()
        }
    },

    props: {
        item: {
            type: Object,
            required: true
        }
    },

    methods: {
        save: function () {
            if (this.newValue.length === 0) {
                alert("Type text");
                return;
            }

            this.isEdit = false;
            this.sourceValue = this.newValue;
        },

        cancel: function () {
            this.isEdit = false;
            this.newValue = this.sourceValue;
        },

        editItem: function () {
            this.isEdit = true;
        },

        deleteItem: function () {
            this.$emit("deleteItem", this.item);
        }
    },

    template: "#todo-item-template"
});

Vue.component("todo-list", {
    data: function () {
        return {
            items: [],
            newItemText: "",
            newId: 1
        }
    },

    methods: {
        addItem: function () {
            var input = document.getElementById("todo-input");

            if (this.newItemText.trim().length === 0) {
                input.placeholder = "Type text";
                return;
            }

            this.items.push({
                id: this.newId,
                text: this.newItemText.trim()
            });

            this.newId++;
            this.newItemText = "";
            input.placeholder = "New note";
        },

        deleteItem: function (item) {
            this.items = this.items.filter(function (e) {
                return e !== item;
            });
        }
    },

    template: "#todo-list-template"
});

new Vue({
    el: "#app"
});