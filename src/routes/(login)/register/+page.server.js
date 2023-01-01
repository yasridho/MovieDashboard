let contacts = [
    {
        first_name: 'Joe',
        last_name: 'Mama',
        email: 'Joe@example.com',
        password: 'ayaya123'
    }
]

export const load = () => {
    return {
        contacts
    };
}

export const actions = {
    create: async ({request}) => {
        // TODO register the user
        // TODO redirect to login page
        const formData = await request.formData();
        const f_name = formData.get('first-name');
        const l_name = formData.get('last-name');
        const email = formData.get('email');
        const password = formData.get('password');
        const contact = {
            f_name, 
            l_name,
            email,
            password
        };
        contacts.push(contact);
        console.log(contact);

    }
};
