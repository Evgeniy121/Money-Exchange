// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
if (currency<=10000 ){
  h=q=d=n=p=0;
  while (currency-50>=0)
  {currency=currency-50; h++;}
  while (currency-25>=0)
  {currency=currency-25; q++;}
  while (currency-10>=0)
  {currency=currency-10; d++;}
  while (currency-5>=0)
  {currency=currency-5; n++;}
  while (currency-1>=0)
  {currency=currency-1; p++;}
  let user={
    H :h,
    Q :q,
    D :d,
    N :n,
    P :p,
  };
  if (h==0)delete user.H;
  if (q==0)delete user.Q;
  if (d==0)delete user.D;
  if (n==0)delete user.N;
  if (p==0)delete user.P;

 return(user); } else {
   let user1={
     error: "You are rich, my friend! We don't have so much coins for exchange"
   } ;
   return(user1);
 }
}
