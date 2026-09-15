# Access Token & Refresh Token — Jo Maine Seekha

Jab maine backend mein authentication padhna start kiya, tab mujhe **Access Token** aur **Refresh Token** ka concept thoda confusing laga. Dono token ka naam similar tha, isliye pehle mujhe clear nahi tha ki dono ka actual kaam kya hai.

Lekin jab maine iska flow samjha, to concept kaafi simple laga.

## Access Token kya hota hai?

Jab user successfully login karta hai, to server ek **Access Token** generate kar sakta hai.

Is token ka use protected APIs ko access karne ke liye hota hai. Matlab agar kisi API ko sirf logged-in user access kar sakta hai, to request ke saath Access Token send kiya jata hai.

Simple flow:

```text
Login
  ↓
Access Token
  ↓
API Request
  ↓
Server Token Verify Karta Hai
  ↓
Data Mil Jata Hai
```

Access Token generally short time ke liye valid rakha jata hai. Iska main reason security hota hai.

## Refresh Token kya hota hai?

Ab problem ye hai ki Access Token expire ho jata hai.

Agar har baar Access Token expire hone par user ko dobara login karna pade, to user experience achha nahi rahega.

Yahin par **Refresh Token** ka use hota hai.

Refresh Token ki help se user ko dobara email aur password enter kiye bina ek **new Access Token** mil sakta hai.

Iska flow kuch aisa hota hai:

```text
Login
  ↓
Access Token + Refresh Token
  ↓
Access Token se API Access
  ↓
Access Token Expire
  ↓
Refresh Token
  ↓
New Access Token
  ↓
API Access Continue
```

## Access Token aur Refresh Token mein difference

| Access Token | Refresh Token |
|---|---|
| Protected API access karne ke liye use hota hai | New Access Token lene ke liye use hota hai |
| Usually short-lived hota hai | Usually longer-lived hota hai |
| API requests ke saath use hota hai | Token refresh karne ke time use hota hai |

## Real Life Example

Isko main ek simple example se samajhta hoon.

Maan lo kisi building mein entry ke liye tumhe ek temporary pass mila.

Wo pass kuch time ke liye valid hai. Ye **Access Token** jaisa hai.

Jab wo pass expire ho jata hai, tumhare paas ek aisa special pass hai jisse tum naya temporary pass le sakte ho.

Ye **Refresh Token** jaisa hai.

Isliye dono ka kaam alag hai.

```text
Access Token = API ko access karna

Refresh Token = New Access Token lena
```

## Mujhe kya samajh aaya?

Pehle mujhe Access Token aur Refresh Token ka difference properly samajh nahi aa raha tha.

Ab mujhe simple way mein samajh aata hai ki **Access Token ka kaam API access karna hai aur Refresh Token ka kaam new Access Token lena hai.**

Authentication backend ka ek important part hai, aur ye concept samajhne ke baad mujhe login system ka flow pehle se zyada clear hua.

Ab next step mein mujhe is concept ko practically implement karke dekhna hai.
