// Mehthods or function

const data = {
  authors: [
    {
      id: "1",
      name: "Naman Malhotra",
      bookIds: ["101"],
    },
    {
      id: "2",
      name: "Manvi Grover",
      bookIds: ["102"],
    },
  ],
  books: [
    {
      id: "101",
      title: "Couple of Things",
      publishYear: "2022",
      authorId: "1",
    },
    {
      id: "102",
      title: "Its End With Us",
      publishYear: "2021",
      authorId: "2",
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      //console.log(parent);
      return data.authors.find(
        (authDetail) => authDetail.id === parent.authorId
      );
    },
  },

  Author: {
    books: (parent, args, context, info) => {
        console.log(parent)
        return data.books.filter(bookInfo => parent.bookIds.includes(bookInfo.id))
    },
  },
  Query: {
    authors: () => {
      return data.authors;
    },

    books: () => {
      return data.books;
    },
  },

  Mutation:{
    addBook:(parent,args,context, info)=>{
        console.log(args)
        const newBook = {...args, id:data.books.length+1}
        data.books.push(newBook)
        return newBook
    }
  }
};
