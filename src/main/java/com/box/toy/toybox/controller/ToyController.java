package com.box.toy.toybox.controller;

import com.box.toy.toybox.model.ToyModel;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController()
@RequestMapping("/api")
public class ToyController {

    @RequestMapping("/hello")
    public @ResponseBody ToyModel helloApi() {
        ToyModel toyModel = new ToyModel();
        toyModel.setMessage("hello world");
        return toyModel;
    }
}
