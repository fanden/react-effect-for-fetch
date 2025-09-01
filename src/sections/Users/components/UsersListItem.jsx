function UsersListItem({ user, index }) {

  const femaleKeywords = [
    "male to female trans woman",
    "transexual woman",
    "male to female",
    "transexual female",
  ];

  const maleKeywords = [
    "transexual man",
    "transmasculine",
    "female to male transgender man",
    "ftm",
  ];

  return (
    <>
      <li
        key={index}
        style={{
          background:
            maleKeywords.includes(user.gender.toLowerCase()) ? "#91dae5" : 
            femaleKeywords.includes(user.gender.toLowerCase()) ? "#d691e5" : 
            "#91e5a3",
        }}
      >
        <img src={user.profileImage} alt={user.firstName + user.lastName} />
        <h3>{user.firstName + " " + user.lastName}</h3>
        <p>Email: {user.email}</p>
      </li>
    </>
  );
}

export default UsersListItem;
