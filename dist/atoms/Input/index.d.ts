export default Input;
declare function Input(props: any): JSX.Element;
declare namespace Input {
    export { propTypes };
    export { defaultProps };
}
declare namespace propTypes {
    const placeholder: any;
    const borderColor: any;
    const className: any;
    const fontSize: any;
    const onChange: any;
    const disabled: any;
    const rounded: any;
    const dataSet: any;
    const value: any;
    const type: any;
    const height: any;
    const name: any;
}
declare namespace defaultProps {
    const placeholder_1: string;
    export { placeholder_1 as placeholder };
    const borderColor_1: string;
    export { borderColor_1 as borderColor };
    const className_1: string;
    export { className_1 as className };
    const disabled_1: boolean;
    export { disabled_1 as disabled };
    const value_1: string;
    export { value_1 as value };
    const fontSize_1: number;
    export { fontSize_1 as fontSize };
    const rounded_1: number;
    export { rounded_1 as rounded };
    const dataSet_1: string;
    export { dataSet_1 as dataSet };
    const type_1: string;
    export { type_1 as type };
    const height_1: number;
    export { height_1 as height };
    const name_1: any;
    export { name_1 as name };
}
