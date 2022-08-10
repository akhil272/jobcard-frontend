import { useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';

type PageProps = RouteProps & {
    title?: string;
    updatePageTitle?: (pageTitle: string) => void;
};

const Page = ({ title, updatePageTitle, ...rest }: PageProps) => {
    useEffect(() => {
        if (title && updatePageTitle) {
            document.title = `DBS | ${title}`;
            updatePageTitle(title);
        }
    }, [title, updatePageTitle]);

    return <Route {...rest} />;
};

export default Page;
