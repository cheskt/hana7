package com.hana7.springdemo.jpa.dto;

import com.hana7.springdemo.jpa.entity.Member;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Data
@SuperBuilder
@ToString(callSuper = true)
@NoArgsConstructor(force = true)
@EqualsAndHashCode(callSuper = true)
public class MemberResponseDTO extends MemberDTO {
	public MemberResponseDTO(Member member) {
		super.setId(member.getId());
		super.setNickname(member.getNickname());
		super.setEmail(member.getEmail());
		super.setBloodType(member.getBloodType());
	}

	protected MemberRequestDTO toDTO(Member mbr) {
		return MemberRequestDTO.builder()
							   .nickname(mbr.getNickname())
							   .email(mbr.getEmail())
							   .build();
	}
}
