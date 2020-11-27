function findEmailDomain(address: string): string {
    const lastAtIndex = address.lastIndexOf('@');
    return address.slice(lastAtIndex + 1);
}

console.log(findEmailDomain("thisisanexample@example.org")); // DEVUELVE example.org
console.log(findEmailDomain("address@domain.com")); //DEVUELVE domain.com
console.log(findEmailDomain("contact@domain.es")); // DEVUELVE domain.es
console.log(findEmailDomain("internet@example.com")); // DEVUELVE example.com
