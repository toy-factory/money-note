package com.note.money.domain.util;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class EmptyStringToNullConverter implements AttributeConverter<String, String> {
    @Override
    public String convertToDatabaseColumn(String attribute) {
        if ("".equals(attribute.trim())) {
            return null;
        } else {
            return attribute;
        }
    }

    @Override
    public String convertToEntityAttribute(String dbData) {
        return dbData;
    }
}
