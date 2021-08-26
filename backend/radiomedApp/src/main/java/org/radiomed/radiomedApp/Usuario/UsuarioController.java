package org.radiomed.radiomedApp.Usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "api/usuario")

public class UsuarioController {


    private final UsuarioService UsuarioService;

    @Autowired
    public UsuarioController(UsuarioService usuarioService) {
        this.UsuarioService = usuarioService;
    }//constructor

    @GetMapping(path = "{usuarioId}")
    public Usuario getUsuario(@PathVariable ("usuarioId") Long usuarioId) {

       return UsuarioService.getUsuario(usuarioId);
    }//getUsuarios

    //apli/usuario/1
    @DeleteMapping(path = "{usuarioId}")
    public void deleteUsuario(@PathVariable("usuarioId") Long usuarioId) {

        UsuarioService.deleteUsuario(usuarioId);
    }//deleteUsuario

}//class UsuarioController

    @PostMapping