import {reactive} from "vue";

export function useCollapse(items = []) {
    const collapseItems = reactive(items.map(item => ({...item, isExpanded: false})))

    const setCollapsed = index => {
        collapseItems[index].isExpanded = !collapseItems[index].isExpanded
    }

    return {
        collapseItems,
        setCollapsed
    }
}
