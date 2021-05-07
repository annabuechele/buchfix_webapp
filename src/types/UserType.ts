interface UserType {
  username: string;
  email: string;
  password?: string;
  name: {
    firstName: string;
    lastName: string;
  };
  location: {
    street: string | null;
    number: string;
    zipCode: string;
    city: string;
    state: string;
    country: string;
  };
}
export default UserType;
