function SignUpUtil() {
  this.userData = [];
  this.register = function (data, callback) {
    let userObject = {
      userOrg: data.signUpOrgName,
      userOfficialId: data.signUpOfficialId,
      userEmail: data.signUpEmail,
      userWalletAddress: data.signUpWalletAddr,
    };
    console.log(userObject);
    this.userData.push(userObject);
    callback(this.userData.length - 1);
  };
}

const signupUtil = new SignUpUtil();
export default signupUtil;
