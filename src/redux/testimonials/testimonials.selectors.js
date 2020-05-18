import { createSelector } from "reselect";

const selectTestimonials = state => state.testimonials;

export const selectItems = createSelector(
  [selectTestimonials],
  testimonials => testimonials.items
);


export const selectRandom = createSelector(
    [selectItems],
    items => { 
        let rand = Math.floor(Math.random() * items.length);
    return items[rand];
});