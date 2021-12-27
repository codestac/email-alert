import AlertForm from "@/components/AlertForm.vue";
import { shallowMount } from "@vue/test-utils";
describe("alertForm.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(AlertForm, {
            methods: { onSubmit: () => {} }
        });

        it("renders", () => {
            expect(wrapper.exists()).toBe(true);
        })
    })
})