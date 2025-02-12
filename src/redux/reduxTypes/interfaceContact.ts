export interface Contact {
  id: string;
  name: string;
  number: string;
}

export type AddContactRequest = Pick<Contact, "name" | "number">;
