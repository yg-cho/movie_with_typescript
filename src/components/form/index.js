// import React from 'react';
// import { Container, Inner, Title, FormGroup, Input, Button, Text, TextSmall, Link, Error } from './styles/form'
//
//
// const Form = ({children, ...restProps}) => {
//     return (
//         <Container {...restProps}>
//             <Inner>{children}</Inner>
//         </Container>
//     );
// };
//
// Form.Title = function FormTitle({children, ...restProps}) {
//     return <Title {...restProps}>{children}</Title>
// }
//
// Form.FormGroup = function FormGroup({children, ...restProps}) {
//     return <FormGroup {...restProps}>{children}</FormGroup>
// }
//
// Form.Input = function FormInput({...restProps}) {
//     return <Input {...restProps}/>
// }
//
// Form.Button = function FormButton({children, ...restProps}) {
//     return <Button {...restProps}>{children}</Button>
// }
//
// Form.Text = function FormText({children, ...restProps}) {
//     return <Text {...restProps}>{children}</Text>
// }
//
// Form.TextSmall = function FormTextSmall({children, ...restProps}) {
//     return <TextSmall {...restProps}>{children}</TextSmall>
// }
//
// Form.Link = function FormLink({children, ...restProps}) {
//     return <Link {...restProps}>{children}</Link>
// }
//
// Form.Error = function FormError({children, ...restProps}) {
//     return <Error {...restProps}>{children}</Error>
// }
//
// export default Form;

import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Container, Inner, Title, FormGroup, Input, Button, Text, TextSmall, Link, Error } from './styles/form';

const Form = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
};

Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Form.FormGroup = function FormFormGroup({ children, ...restProps }) {
    return <FormGroup {...restProps}>{children}</FormGroup>;
};

Form.Input = function FormInput({ ...restProps }) {
    return <Input {...restProps} />;
};
Form.Button = function FormButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};

Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Link = function FormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>;
};


export default Form;
