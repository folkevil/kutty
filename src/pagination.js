module.exports = Pagination = () => ({
  ".pagination": {
    "@apply flex items-center pl-0 list-none text-sm": {},
  },
  ".pagination-link, .pagination-disabled, .prose a.pagination-link, .prose .pagination-disabled": {
    "@apply px-4 rounded no-underline text-gray-800 font-medium text-sm transition-colors duration-150 ease-in flex items-center justify-center h-10 ml-px": {},
  },
  ".pagination-link": {
    "@apply hover:bg-gray-200": {},
  },
  ".pagination-link:focus, .pagination-link:active": {
    "@apply ring outline-none z-10": {},
  },
  ".pagination-disabled:focus, .pagination-disabled:active": {
    "@apply outline-none": {},
  },
  ".pagination-link:first-child, .pagination-disabled:first-child": {
    "@apply ml-0": {},
  },
  ".pagination-disabled": {
    "@apply bg-gray-200 text-gray-700 pointer-events-none cursor-default !important": {},
  },
  ".pagination-active, .prose a.pagination-active": {
    "@apply bg-primary text-white hover:bg-primary-dark focus:bg-primary-dark": {},
  },
  // Sizes
  ".pagination-sm .pagination-link, .pagination-sm .pagination-disabled": {
    "@apply h-6 text-xs": {},
  },
  ".pagination-lg .pagination-link, .pagination-lg .pagination-disabled": {
    "@apply h-12 text-xl": {},
  },
});
