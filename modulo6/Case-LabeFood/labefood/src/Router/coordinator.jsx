export const goToLogin = (navigate) => {
  navigate("/");
};

export const goToSignup = (navigate) => {
  navigate("/signup");
};

export const goToSignupAddress = (navigate) => {
  navigate("/signup/address");
};

export const goToProfile = (navigate) => {
  navigate("/profile");
};

export const goToCart = (navigate) => {
  navigate("/cart");
};

export const goToFeed = (navigate) => {
  navigate("/feed");
};

export const goToBack = (navigate) => {
  navigate(-1);
};


export const goToRestaurant = (navigate, id) => {
  navigate(`/feed/${id}`);
};
