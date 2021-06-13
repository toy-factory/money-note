import { atom, selector } from 'recoil';
import { Group } from '#/types';

export const authState = atom({
  key: 'authState',
  default: '',
});

export const searchState = atom({
  key: 'searchState',
  default: '',
});

export const groupState = atom({
  key: 'groupState',
  default: [],
});

export const groupFilteredSelector = selector({
  key: 'groupFilteredSelector',
  get: ({ get }): Group[] => {
    const searchKeyword = get(searchState);
    const group = get(groupState);
    const filtered = group
      .filter(({ title }: {title: string}) => title.includes(searchKeyword));
    return filtered;
  },
});
