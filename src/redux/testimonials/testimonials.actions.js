import testimonialsActionTypes from "./testimonials.types";

export const testimonialsFetch = () => ({
    type: testimonialsActionTypes.TESTIMONIALS_FETCH
});
  
export const testimonialsDidFetch = testimonials => ({
    type: testimonialsActionTypes.TESTIMONIALS_DID_FETCH,
    payload: testimonials
});
  
export const testimonialsFetchFail = errorMsg => ({
    type: testimonialsActionTypes.TESTIMONIALS_FETCH_FAIL,
    payload: errorMsg
});