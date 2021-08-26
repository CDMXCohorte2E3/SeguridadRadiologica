package org.radiomed.radiomedApp.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class UsuarioService{

//Se comenta hasta vincular la DB
//    @Autowired
//     public UsuarioService(){}

    public List<Usuario> getUsuario(){
/*
        return List.of(new Usuario("America","Sanchez", "americasanchezleon@gmail.com", "SALA941009S82", "Mi casa"),
                new Usuario("Fabiola", "Leon", "americasanchezleon@gmail.com", "SALA941009S82", "Mi casa")
        );

        */

        ArrayList<Usuario> lista = new ArrayList<Usuario>();
        lista.add(new Usuario("America","Sanchez", "americasanchezleon@gmail.com", "SALA941009S82", "Mi casa"));
        lista.add( new Usuario("Fabiola", "Leon", "americasanchezleon@gmail.com", "SALA941009S82", "Mi casa"));

        return lista;
    }//constructor

    public void deleteUsuario(Long usuarioId){
        if (usuarioId <= lista.size()){
            lista.remove(usuarioId.intValue()-1);
        }//if
    }//deleteUsuario


    public void addUsuario (Usuario usuario){
        lista.add(usuario);
    }//addUsuario


    public void updateUsuario(Long usuarioId, String lastName, String rfc) {
        if (usuarioId<= lista.size()) {
            Usuario tmpEmp = lista.get(usuarioId.intValue()-1);
            if (lastName != null) tmpEmp.setLastName(lastName);
            if (rfc != null) tmpEmp.setRfc(rfc);
        }//if
    }// updateUsuario






}//class UsuarioService