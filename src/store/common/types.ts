import { ApiReturnType } from '@Store/api';
import { UpdateJobCardItemInStorePayload } from '@Store/jobCards/types';
import { User } from '@Store/users/types';
import { StaticContext } from 'react-router';
import { RouteComponentProps as RouteComponentPropsType } from 'react-router-dom';

export const UPDATE_PAGE_TITLE = 'UPDATE:PAGE_TITLE';

export type SelectOption = {
    value: string;
    label: string;
};

export type RouteComponentProps = RouteComponentPropsType<
    {},
    StaticContext,
    {
        from: Location;
    }
>;

export type RoutePropsType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any;
    exact?: boolean;
    path?: string;
    title?: string;
    updatePageTitle?: (title: string) => void;
};

export type HeaderProps = {
    user: User | null;
    getUser: (id: string) => Promise<ApiReturnType<User>>;
};

type UpdatePageTitleAction = {
    type: typeof UPDATE_PAGE_TITLE;
    pageTitle: string;
};

export type CommonActionTypes = UpdatePageTitleAction;

export type MainLayoutProps = {
    updateJobCardItemsInStore: (item: UpdateJobCardItemInStorePayload) => void;
};
