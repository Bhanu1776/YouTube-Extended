type SubArrayType = [number, number];

type SuggestSubtypesType = SubArrayType[];

export type SearchSuggestionApiDataType = [
  string,
  string[],
  unknown[],
  {
    'google:suggestsubtypes': SuggestSubtypesType;
  },
];
