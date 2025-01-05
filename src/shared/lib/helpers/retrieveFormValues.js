export const retrieveFormValues = (form) => {
    const formData = new FormData(form);

    return  Object.fromEntries(formData.entries());
}
