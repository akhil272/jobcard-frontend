import { forwardRef, useImperativeHandle } from 'react';

const Child = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        showAlert() {
            // eslint-disable-next-line no-alert
            alert('Child Function Called');
        },
    }));
    return <div>Child Component</div>;
});

Child.displayName = 'child';

export default Child;
