package org.radiomed.radiomedApp.Usuario;

public class Usuario {
    private String name;
    private String lastname;
    private String email;
    private String rfc;
    private String address;

    public Usuario(String name, String lastname, String email, String rfc, String address) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.rfc = rfc;
        this.address = address;
    }//constructor


    public String getName() {
        return name;
    }//getName

    public void setName(String name) {
        this.name = name;
    }//setName

    public String getLastname() {
        return lastname;
    }//getLastname

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }//setLastname

    public String getEmail() {
        return email;
    }//getEmail

    public void setEmail(String email) {
        this.email = email;
    }//setEmail

    public String getRfc() {
        return rfc;
    }//getRfc

    public void setRfc(String rfc) {
        this.rfc = rfc;
    }//setRfc

    public String getAddress() {
        return address;
    }//getAddress

    public void setAddress(String address) {
        this.address = address;
    }//setAddress

    @Override
    public String toString() {
        return "Usuario{" +
                "name='" + name + '\'' +
                ", lastname='" + lastname + '\'' +
                ", email='" + email + '\'' +
                ", rfc='" + rfc + '\'' +
                ", address='" + address + '\'' +
                '}';
    }//toString

}//class usuario
