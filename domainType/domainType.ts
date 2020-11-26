function domainType(domains: string[]): string[] {
    const domainTypes: string[] = [];
    for (let i = 0; i < domains.length; i ++) {
        const domain = domains[i].split('.');
        const lastDomain = domain[domain.length - 1];
        if (lastDomain === 'org') {
            domainTypes.push('organization')
        } else if (lastDomain === 'com') {
            domainTypes.push('commercial')
        } else if (lastDomain === 'net') {
            domainTypes.push('network')
        } else if (lastDomain === 'info') {
            domainTypes.push('information')
        }
    }
    return domainTypes;
}

console.log(domainType(["github.org", "github.com", "github.net", "github.info"])); // DEVUELVE [ 'organization', 'commercial', 'network', 'information' ]
console.log(domainType(["wikipedia.org", "wikipedia.com", "wikipedia.net", "wikipedia.info"])); // DEVUELVE [ 'organization', 'commercial', 'network', 'information' ]
console.log(domainType(["google.org", "google.com", "google.net", "google.info"])); // DEVUELVE [ 'organization', 'commercial', 'network', 'information' ]
