import { Category } from '../Data';

/**
 * The Filter interface defines what information is held for a chosen category as a filter.
 */
export class Filter {
    /**
     * Holds an array of all displayNames for the path to this category.
     */
    public displayName: string[];

    /**
     * A copy/reference to the actual category selected (from what was received in the categorize call).
     */
    public ref: Category;
}
