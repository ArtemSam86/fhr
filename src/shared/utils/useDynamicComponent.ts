import { type Raw, defineComponent, h } from 'vue';

export interface IDynamicComponent {
  component: Raw<any>;
  componentProps?: () => Record<string, any>;
}

const isEmpty = <T>(obj: T) => {
  if (!obj) return true;
  return Object.getOwnPropertyNames(obj).length === 0;
}

export function useDynamicComponent(
  component: IDynamicComponent[] | IDynamicComponent,
  wrapperStyle?: Record<string, any>
) {
  return defineComponent(() => {
    return () => {
      if (isEmpty(component)) return null;

      if (Array.isArray(component))
        return h(
          'div',
          { style: { ...wrapperStyle } },
          component.map((item) =>
            h(
              item.component,
              item.componentProps ? { ...item.componentProps() } : null
            )
          )
        );

      return h(
        component.component,
        component.componentProps ? { ...component.componentProps() } : null
      );
    };
  });
}

// TODO: Хук для генерации компонента, чтобы можно было его пробросить в ячейку таблицы
