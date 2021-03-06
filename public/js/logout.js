const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log(response);
    document.location.replace("/");
  } else {
    console.log("error", response);
    alert(response.statusText);
  }
};

document.querySelector("#logout").addEventListener("click", logout);
